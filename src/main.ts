import Phaser from 'phaser';
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin';
import ShakePositionPlugin from 'phaser3-rex-plugins/plugins/shakeposition-plugin';

import { GAME_BG_COLOR } from './game/utils/consts';
import { SceneKeys } from './game/utils/SceneKeys';
import PreloaderScene from './scenes/Preloader';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  pixelArt: true,
  fps: {
    target: 1,
  },
  backgroundColor: GAME_BG_COLOR,
  scale: {
    width: 1920,
    height: 1080,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  plugins: {
    scene: [
      {
        key: 'rexUI',
        plugin: RexUIPlugin,
        mapping: 'rexUI',
      },
    ],
    global: [
      {
        key: 'rexShakePosition',
        plugin: ShakePositionPlugin,
        mapping: 'rexShake',
        start: true,
      },
    ],
  },
};

const typeHackerGame = new Phaser.Game(config);

// SCENES
typeHackerGame.scene.add(SceneKeys.Preloader, PreloaderScene, true);

export default typeHackerGame;
