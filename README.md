# Jupyter-Notebook-config



Instructions are for a clean install of Jupiter 4.0. Upgrading from legacy versions of IPython to Jupyter provides numerous paths for configuration, which was infuriating when attempting to adapt my ipython-notebook-config setup to Jupyter 4.0. Also assumes one has installed [pandas](http://pandas.pydata.org/).

Using [sjpfenninger's wonderful `notify` extension](https://github.com/sjpfenninger/ipython-extensions), modified to add Jupyter logo to notification popup, and set the defaults to notify when cell has take > 30 seconds to run.

Also uses [cpcloud's incredibly helpful `autotime` extension](https://github.com/cpcloud/ipython-autotime).

Custom notebook styling replaces default fonts with Open Sans and Office Code Pro D (which is by far the nicest option out of the 30 or so monospace fonts I've rigorously tested for beauty and legibility). The styling of the Pandas dataframes output is inspired by [Beaker Notebook](http://beakernotebook.com/). There are a few css issues that need to be resolved.

In [`.ipython > profile_default > ipython_config.py`](https://github.com/bclifton/Jupyter-Notebook-config/blob/master/.ipython/profile_default/ipython_config.py), the `autotime`  extension is loaded, pandas is imported, and expanded display options are enabled for dataframes, preventing cells from being truncated with ellipses and whatnot.



---

### Installation:

The notification extension:

`$ curl -L https://raw.githubusercontent.com/bclifton/Jupyter-Notebook-config/master/notify.js > $(jupyter --data-dir)/nbextensions/notify.js`

Move the `.jupyter` and `.ipython` files to the 



Install fonts:

[Open Sans](http://www.fontsquirrel.com/fonts/open-sans)

[Office Code Pro D](https://github.com/nathco/office-code-pro) (fine work by nathco)





___

### Caveats:

Only tested locally, so I'm not sure what breaks when this configuration is installed remotely, but I'm certain it will break somewhere. Could load the fonts in `custom.js` over a CDN, but I haven't needed to do that.