require 'test_helper'

class GridxRailsTest < ActiveSupport::TestCase
  test "asset precompilation configuration" do
    assert Dummy::Application.config.assets.precompile.include?(/^gridx\//), 'should include a Regexp for gridx'
  end
end
