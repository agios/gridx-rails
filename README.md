# gridx-rails

This gem prepares [GridX](http://oria.github.io/gridx/) assets (JavaScripts, stylesheets,
templates and and images) for the Rails 3.1+ [asset
pipeline](http://guides.rubyonrails.org/asset_pipeline.html).

GridX is designed to load modules using Dojo AMD, so the files are not
packaged together in a single file, in the typical asset pipeline style,
they are instead precompiled separately.

## Usage

In your Gemfile, add:

```ruby
gem 'gridx-rails'
```

