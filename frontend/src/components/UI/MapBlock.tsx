import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';

export const MapBlock = ({ mapWidth, mapHeight }: { mapWidth: string; mapHeight: string }) => {
  const mapData = {
    center: [53.949852, 27.706442],
    zoom: 16,
    controls: ['zoomControl', 'fullscreenControl'],
  };

  const coordinates = [53.949852, 27.706442];

  return (
    <YMaps>
      <Map
        style={{ width: mapWidth, height: mapHeight }}
        defaultState={mapData}
        modules={['control.ZoomControl', 'control.FullscreenControl']}
      >
        <Placemark geometry={coordinates} />
      </Map>
    </YMaps>
  );
};

export default MapBlock;
