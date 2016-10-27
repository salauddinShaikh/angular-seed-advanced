import { join } from 'path';
import { SeedAdvancedConfig } from './seed-advanced.config';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedAdvancedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');
  FONTS_DEST = `${this.APP_DEST}/font-awesome/fonts`;

  FONTS_SRC = ['node_modules/font-awesome/fonts/**'];
  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      { src: 'font-awesome/css/font-awesome.min.css', inject: true },
      { src: 'primeng/resources/primeng.min.css', inject: true },
      { src: 'primeng/resources/themes/omega/theme.css', inject: true },
      { src: 'fullcalendar/dist/fullcalendar.min.css', inject: true },
      { src: 'fullcalendar/dist/fullcalendar.min.js', inject: true },
      { src: 'moment/moment.js', inject: 'libs' },
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      ...this.APP_ASSETS,
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
      { src: `${this.APP_SRC}/assets/global/plugins/jquery.min.js`, inject: 'libs', vendor: false },
      { src: `${this.APP_SRC}/assets/global/plugins/bootstrap/js/bootstrap.min.js`, inject: true, vendor: false },
      { src: `${this.APP_SRC}/assets/global/plugins/js.cookie.min.js`, inject: true, vendor: false },
      { src: `${this.APP_SRC}/assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js`, inject: true, vendor: false },
      { src: `${this.APP_SRC}/assets/global/plugins/jquery.blockui.min.js`, inject: true, vendor: false },
      { src: `${this.APP_SRC}/assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js`, inject: true, vendor: false },
      { src: `${this.APP_SRC}/assets/global/scripts/app.min.js`, inject: true, vendor: false },
      { src: `${this.APP_SRC}/assets/layouts/layout4/scripts/layout.min.js`, inject: true, vendor: false },
      { src: `${this.APP_SRC}/assets/layouts/layout4/scripts/demo.min.js`, inject: true, vendor: false },
      { src: `${this.APP_SRC}/assets/layouts/global/scripts/quick-sidebar.min.js`, inject: true, vendor: false },
      { src: `${this.APP_SRC}/assets/layouts/global/scripts/quick-nav.min.js`, inject: true, vendor: false },
      { src: `${this.APP_SRC}/assets/global/plugins/simple-line-icons/simple-line-icons.min.css`, inject: true, vendor: false },
      { src: `${this.APP_SRC}/assets/global/plugins/bootstrap/css/bootstrap.min.css`, inject: true, vendor: false },
      { src: `${this.APP_SRC}/assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css`, inject: true, vendor: false },
      { src: `${this.APP_SRC}/assets/global/css/components.min.css`, inject: true, vendor: false },
      { src: `${this.APP_SRC}/assets/global/css/plugins.min.css`, inject: true, vendor: false },
      { src: `${this.APP_SRC}/assets/layouts/layout4/css/layout.min.css`, inject: true, vendor: false },
      { src: `${this.APP_SRC}/assets/layouts/layout4/css/themes/default.min.css`, inject: true, vendor: false },
      { src: `${this.APP_SRC}/assets/layouts/layout4/css/custom.min.css`, inject: true, vendor: false }
    ];

    /* Add to or override NPM module configurations: */
    // this.mergeObject(this.PLUGIN_CONFIGS['browser-sync'], { ghostMode: false });
  }

}
