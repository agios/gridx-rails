# gridx-rails

This gem packages [GridX](http://oria.github.io/gridx/) 1.1.0 assets (JavaScripts, stylesheets, 
templates and and images) for the Rails 3.1+ [asset
pipeline](http://guides.rubyonrails.org/asset_pipeline.html).

GridX is designed to load modules using Dojo AMD, so the files are not
packaged together in the typical asset pipeline style, they are instead
minified separately.

## Usage

In your Gemfile, add:

```ruby
gem 'gridx-rails'
```

