define(['jade'], function(jade){
  return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div class="container"><section id="typeahead"><div class="page-header"><h1>Wizard for Backbone<small style="margin:1%;">backbone-wizard.js</small></h1></div><div class="row"><h2>Live demo</h2><div style="margin-bottom: 4%; border: solid 1px rgb(219, 219, 219); padding:3%;" class="col-md-12"><div id="wizardContainer"></div></div><div class="col-md-3"><h3>Based on</h3><p>Based on malandrew\'s gist: </p><a href="https://gist.github.com/malandrew/1112194">https://gist.github.com/malandrew/1112194</a><h3>Author</h3><p>Marco Antonio Pajares</p><a href="http://ayxos.com/backbone-wizard/">http://ayxos.com/</a><br/><a href="https://github.com/cybermarkus1/backbone-wizard">github code</a><h3>About</h3><p>Create a custom backbone-wizard.</p><ul><li>must be used as a requireJS component</li></ul><p><a href="js/common/wizard/views/backbone_wizard.js" target="_blank" class="btn btn-primary">Download</a></p><h3>Change log</h3><dl><dt>v@1.2.0</dt><dt>09/08/2014</dt><dd>Fixed bower path, uglify js in a single file.</dd></dl></div><div class="col-md-9"><pre class="prettyprint linenums">var Backbone_wizard = require(\'common/wizard/views/backbone_wizard\')\n//Steps\nvar WizardSteps = [\n    { view: require(\'apps/WizardExample/steps/init/view\'), title:\'init\', intro:\'init slide\'}\n, { view: require(\'apps/WizardExample/steps/process/view\'), title:\'process\', intro:\'process slide\'}\n  , { view: require(\'apps/WizardExample/steps/random/view\'), title:\'choose\', intro:\'choose slide\'}\n  , { view: require(\'apps/WizardExample/steps/finish/view\'), title:\'finish\', intro:\'finish slide\'}\n  \n]\n\nreturn Backbone.View.extend({\n\n  render:function () {\n    console.log(\'rendering....\' );\n    var self = this;\n    $(this.el).html(this.template() );\n    \n    window.wizard = new Backbone_wizard({\n      el: self.$el.find(\'#wizardContainer\'),\n      steps: WizardSteps\n    });\n    \n    return this;\n  }\n  \n});</pre><hr/><h2>Get backbone-wizard.js</h2><p>Get the backbone-wizard via bower:</p><pre class="prettyprint linenums">bower install backbone-wizard</pre><h3>Options</h3><table class="table table-bordered table-striped"><thead><tr><th style="width: 100px;">Name</th><th style="width: 50px;">type</th><th style="width: 100px;">example</th><th>description</th></tr></thead><tbody><tr><td>el</td><td>div</td><td>\'this.$el.find(#div-name-to-print-wizard)\'</td><td>div to render wizard.</td></tr><tr><td>steps</td><td>array</td><td>[{view:view;title:\'title\';intro:\'intro\'}]</td><td>array with slides views</td></tr><tr><td>steps.view</td><td>path</td><td>\'apps/WizardExample/steps/init/view\'</td><td>set the slide view path.</td></tr><tr><td>steps.title</td><td>string</td><td>\'firs step title\'</td><td>set a slide title</td></tr><tr><td>steps.intro</td><td>string</td><td>\'intro firs step\'</td><td>set a slide intro</td></tr></tbody></table><h3>Markup</h3><p>Format a component.</p><pre class="prettyprint linenums">&lt;div id=&quot;wizardContainer&quot;&gt;&lt;/div&gt;\n</pre><h3>Methods</h3><h4>.addStep(step)</h4><pre class="prettyprint linenums">.addStep({\n  view: require(\'apps/WizardExample/steps/summary/view\'),\n  title:\'B option\',\n  intro:\'you choose option B\'\n})</pre><p>add a step.</p></div></div></section></div>');
}
return buf.join("");
};
});