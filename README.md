Backbone-wizard
===================

[![Greenkeeper badge](https://badges.greenkeeper.io/ayxos/backbone-wizard.svg)](https://greenkeeper.io/)

live version = http://ayxos.github.io/backbone-wizard/

A tool for create dinamic Wizards using Backbone

Based on malandrew's gist: https://gist.github.com/malandrew/1112194

using:
- bower (to get deps)
- Grunt (generate index.html/Css files and jade-js converter)
- require
- jade (as template engine)
- jquery
- Backbone
- window.wizard (in order to get a singleton reference to add/remove slides dynamically)

![ScreenShot](http://i58.tinypic.com/wulzt4.png)

Install using bower
====================
```
bower install backbone-wizard
```

- *need RequireJs


How-to use it
====================

On your View just list your steps views in an array and create a Wizard using this array.

```
  var Wizard = require('path-to-backbone-wizard-lib');
  
  //Steps
  var WizardSteps = [
      { view: require('apps/Wizard/steps/finish/view'), title:'finish', intro:'lolo'}
    , { view: require('apps/Wizard/steps/init/view'), title:'init', intro:'jojo'}
    , { view: require('apps/Wizard/steps/process/view'), title:'process', intro:'baba'}
    , { view: require('apps/Wizard/steps/random/view'), title:'choose', intro:'wiii'}
  ];
  
  .
  .
  .
  
  window.wizard = new Wizard({
    el: self.$el.find('#wizard'),
    steps: WizardSteps
  });
  
  
```

Add slides dynamically
====================

If you need to create dynamic wizard using Json just go to the step view and run the following code:

```
  var g = {
    view: require('apps/Wizard/steps/summary/view'),
    title:'3g',
    intro:'3ggg'
  };

  .
  .
  .
  window.wizard.addStep(g);
```

