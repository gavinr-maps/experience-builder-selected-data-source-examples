/** @jsx jsx */
import { jsx, type IMDataSourceInfo, type DataSource, DataSourceStatus, type FeatureLayerQueryParams, type AllWidgetProps, DataSourceComponent } from 'jimu-core'

/**
 * This widget shows how to listen to the selection change of a data source.
 */
export default function Widget(props: AllWidgetProps<unknown>) {
  const isDsConfigured = () => {
    if (props.useDataSources && props.useDataSources.length === 1) {
      return true
    }
    return false
  }

  const dataRender = (ds: DataSource, info: IMDataSourceInfo) => {
    if (ds && ds.getStatus() === DataSourceStatus.Loaded) {
      const selectedRecords = ds.getSelectedRecords().map(x => x.getFieldValue('STATE_NAME'))
      return <div>SELECTED STATE: {selectedRecords.join(', ')}</div>
    }
    // else, do not show anything:
    return <div></div>
  }

  if (!isDsConfigured()) {
    return <h3>
      This widget shows how to listen to the selection change of a data source.
      <br />
      Please configure the data source.
    </h3>
  }
  return <div className='widget-listen-selection-change' style={{ fontSize: '20px', padding: '20px' }}>

    <DataSourceComponent useDataSource={props.useDataSources[0]} query={{ where: '1=1' } as FeatureLayerQueryParams} widgetId={props.id}>
      {dataRender}
    </DataSourceComponent>
  </div>
}
