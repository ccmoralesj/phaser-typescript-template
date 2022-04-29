import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';
import ShakePositionPlugin from 'phaser3-rex-plugins/plugins/shakeposition-plugin';

// This class adds the scene and global plugin to our game scenes
export class BaseScene extends Phaser.Scene {
  rexUI!: RexUIPlugin;
  rexShake!: ShakePositionPlugin;

  constructor(key: string) {
    super({ key });
  }
}
