module GridxRails
  class Engine < ::Rails::Engine
    isolate_namespace GridxRails
    initializer "gridx-rails.assets.precompile" do |app|
      app.config.assets.precompile << /^gridx\//
    end
  end
end
