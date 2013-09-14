$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "gridx-rails/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "gridx-rails"
  s.version     = GridxRails::VERSION
  s.authors     = ["Alex Giouzenis"]
  s.email       = ["alexandrosg@gmail.com"]
  s.homepage    = "https://github.com/agios/gridx-rails"
  s.summary     = "Gridx packaged for the Rails asset pipeline"
  s.description = "Gridx's JavaScript, CSS, and support files packaged individually for AMD loading"
  s.license     = "BSD or AFL"

  s.files = Dir["{app,lib}/**/*"] + ["LICENSE", "Rakefile", "README.md"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", ">= 3.1.0"

  s.add_development_dependency "sqlite3"

  s.require_path = 'lib'
end
