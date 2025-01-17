# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "cahuichcom"
  spec.version       = "0.2.0"
  spec.authors       = ["LeonardoCahuichLopez"]
  spec.email         = ["leonardo.cahuich@icloud.com"]

  spec.summary       = "Jekyll theme"
  spec.homepage      = "https://preview.cahuich.com/"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.required_ruby_version = "> 3.2"

  spec.platform = Gem::Platform::RUBY
  #spec.add_runtime_dependency "jekyll", "> 3.1", "< 5.0"
  #spec.add_development_dependency "bundler", "~> 2.5.20"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.0"
end