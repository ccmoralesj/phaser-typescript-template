import { SceneKeys } from '../game/utils/SceneKeys';
import { BaseScene } from './BaseScene';

export default class PreloaderScene extends BaseScene {
  constructor() {
    super(SceneKeys.Preloader);
  }

  preload() {
    // load all general assets here
    // PROPS AND ICONS
    // this.load.image('panel', 'assets/main/damageMonitor/monitor.png');
    // this.load.image('timer', 'assets/main/timer.png');
    // SFX
    // this.load.audio('keyForSoundEffect', ['assets/sfx/someSoundEffect.ogg']);
    // this.load.audio('secondKeyForSoundEffect', ['assets/sfx/anotherSoundEffect.wav']);
    // this.load.audio('thirdKeyForSoundEffect', ['assets/sfx/OneMoreSoundEffect.mp3']);
    // Sprites
    // this.load.spritesheet('keyForSpreadSheet', 'assets/main/someAsset.png', {
    //   frameWidth: 32,
    //   frameHeight: 25,
    // });
  }

  create() {
    // Start Next Scenes
    // this.scene.start(SceneKeys.NextScene);
    // Or run it in parallel
    // this.scene.run(SceneKeys.AnotherScene);
  }
}
