workspace(name = "mod_pagespeed")

load("//bazel:repositories.bzl", "mod_pagespeed_dependencies")

mod_pagespeed_dependencies()

local_repository(
    name = "envoy_build_config",
    path = ".",
)

load("@envoy//bazel:api_binding.bzl", "envoy_api_binding")

envoy_api_binding()

load("@envoy//bazel:api_repositories.bzl", "envoy_api_dependencies")

envoy_api_dependencies()

load("@envoy//bazel:repositories.bzl", "envoy_dependencies")

envoy_dependencies()

load("@envoy//bazel:repositories_extra.bzl", "envoy_dependencies_extra")

envoy_dependencies_extra()

load("@envoy//bazel:python_dependencies.bzl", "envoy_python_dependencies")

envoy_python_dependencies()

load("@envoy//bazel:dependency_imports.bzl", "envoy_dependency_imports")

envoy_dependency_imports()

# For PIP support:
load("@rules_python//python:pip.bzl", "pip_install")

# This rule translates the specified requirements.txt into
# @my_deps//:requirements.bzl, which itself exposes a pip_install method.
pip_install(
    name = "python_pip_deps",
    requirements = "//:requirements.txt",
)
