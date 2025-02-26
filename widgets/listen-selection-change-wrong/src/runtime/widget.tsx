import { React, type AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import reactiveUtils from 'esri/core/reactiveUtils'

const { useState } = React

const Widget = (props: AllWidgetProps<any>) => {
  const [currentSelectedState, setCurrentSelectedState] = useState<string>('')

  const activeViewChangeHandler = (jmv: JimuMapView) => {
    if (jmv) {
      reactiveUtils.watch(
        () => jmv.view.popup.selectedFeature,
        () => {
          if (jmv.view?.popup?.selectedFeature) {
            setCurrentSelectedState(jmv.view.popup.selectedFeature.attributes.STATE_NAME)
          }
        })
    }
  }

  return <div className="widget-starter jimu-widget" style={{ fontSize: '20px', padding: '20px' }}>
    {props.useMapWidgetIds && props.useMapWidgetIds.length === 1 && (
      <JimuMapViewComponent useMapWidgetId={props.useMapWidgetIds?.[0]} onActiveViewChange={activeViewChangeHandler} />
    )}
    <p>
      SELECTED STATE: {currentSelectedState}
    </p>
  </div>
}

export default Widget
