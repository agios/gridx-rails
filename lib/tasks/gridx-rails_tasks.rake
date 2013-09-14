# desc "Explaining what the task does"
# task :gridx-rails do
#   # Task goes here
# end

IGNORE = [/\/tests\//, /\/util\//, /\/build\//, 
  /^gridx\/gallery/, /^gridx\/mobile\/demos/, /\.profile\.js$/
]

task :submodule do
  sh 'git submodule update --init' unless File.exist?('gridx/package.json')
end

desc "Remove the app directory"
task :clean do
  rm_rf 'app'
end

def target_path path
  if File.directory?(path)
    nil
  else
    case File.extname(path)
    when '.js', '.html'
      "app/assets/javascripts/"
    when '.css'
      "app/assets/stylesheets/"
    when '.png', '.gif', '.bmp'
      "app/assets/images/"
    when '.md', '.txt'
      nil
    else
      puts "Ignoring file: #{path}"
      nil
    end
  end
end

desc "Copy the assets into their proper folders"
task assets: :submodule do
  Rake.rake_output_message 'Copying assets'
  Dir.glob("gridx/**/**").select{|path| !IGNORE.any?{|i| i.match(path)}}.each do |path|
    target = target_path(path)
    if target
      dirname = File.dirname(path)
      mkdir_p target + dirname, verbose: false
      cp path, target + path, verbose: false
    end
  end
end

task build: [:clean, :assets]
