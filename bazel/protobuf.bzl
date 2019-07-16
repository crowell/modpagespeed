protobuf_build_rule = """
cc_library(
    name = "protobuf_lite",
    srcs = [
        'src/google/protobuf/stubs/atomicops_internals_x86_msvc.cc',
        'src/google/protobuf/stubs/common.cc',
        'src/google/protobuf/stubs/once.cc',
        'src/google/protobuf/extension_set.cc',
        'src/google/protobuf/generated_message_util.cc',
        'src/google/protobuf/message_lite.cc',
        'src/google/protobuf/repeated_field.cc',
        'src/google/protobuf/wire_format_lite.cc',
        'src/google/protobuf/io/coded_stream.cc',
        'src/google/protobuf/io/zero_copy_stream.cc',
        'src/google/protobuf/io/zero_copy_stream_impl_lite.cc',
        'src/google/protobuf/stubs/atomicops_internals_x86_gcc.cc',
        'src/google/protobuf/unknown_field_set.cc',
    ],
    hdrs = [
        'src/google/protobuf/arena.h',
        'src/google/protobuf/wire_format.h',
        'src/google/protobuf/metadata.h',
        'src/google/protobuf/message.h',
        'src/google/protobuf/descriptor.h',
        'src/google/protobuf/descriptor.pb.h',
        'src/google/protobuf/generated_enum_reflection.h',
        'src/google/protobuf/generated_enum_util.h',
        'src/google/protobuf/arenastring.h',
        'src/google/protobuf/stubs/atomicops.h',
        'src/google/protobuf/stubs/atomicops_internals_arm_gcc.h',
        'src/google/protobuf/stubs/atomicops_internals_atomicword_compat.h',
        'src/google/protobuf/stubs/atomicops_internals_macosx.h',
        'src/google/protobuf/stubs/atomicops_internals_mips_gcc.h',
        'src/google/protobuf/stubs/atomicops_internals_x86_gcc.h',
        'src/google/protobuf/stubs/atomicops_internals_x86_msvc.h',
        'src/google/protobuf/stubs/common.h',
        'src/google/protobuf/stubs/once.h',
        'src/google/protobuf/stubs/platform_macros.h',
        'src/google/protobuf/extension_set.h',
        'src/google/protobuf/generated_message_util.h',
        'src/google/protobuf/message_lite.h',
        'src/google/protobuf/repeated_field.h',
        'src/google/protobuf/unknown_field_set.h',
        'src/google/protobuf/wire_format_lite.h',
        'src/google/protobuf/wire_format_lite_inl.h',
        'src/google/protobuf/io/coded_stream.h',
        'src/google/protobuf/io/zero_copy_stream.h',
        'src/google/protobuf/io/zero_copy_stream_impl_lite.h',
        'src/google/protobuf/io/zero_copy_stream_impl.h',
        'src/google/protobuf/stubs/stl_util.h',
        'src/google/protobuf/stubs/stringprintf.h',
        'src/google/protobuf/stubs/stringpiece.h',
        'src/google/protobuf/stubs/strutil.h',
        'src/google/protobuf/stubs/int128.h',
        'src/google/protobuf/stubs/fastmem.h',
        'src/google/protobuf/stubs/hash.h',
        'src/google/protobuf/stubs/port.h',
        'src/google/protobuf/stubs/macros.h',
        'src/google/protobuf/stubs/logging.h',
        'src/google/protobuf/stubs/scoped_ptr.h',
        'src/google/protobuf/stubs/mutex.h',
        'src/google/protobuf/stubs/callback.h',
        'src/google/protobuf/stubs/type_traits.h',
        'src/google/protobuf/stubs/atomic_sequence_num.h',
        'src/google/protobuf/stubs/map_util.h',
        'src/google/protobuf/stubs/template_util.h',
        'src/google/protobuf/stubs/casts.h',
        'src/google/protobuf/stubs/status.h',
        'src/google/protobuf/io/coded_stream_inl.h',
    ],
    includes = ["src/"],
    visibility = ["//visibility:public"],
    copts =  ["-DHAVE_PTHREAD",],
)

cc_library(
    name = "protobuf_full_do_not_use",
    srcs = [
        'src/google/protobuf/compiler/java/java_extension_lite.cc',
        'src/google/protobuf/compiler/java/java_doc_comment.cc',
        'src/google/protobuf/stubs/int128.cc',
        'src/google/protobuf/stubs/substitute.cc',
        'src/google/protobuf/stubs/strutil.cc',
        'src/google/protobuf/stubs/stringpiece.cc',
        'src/google/protobuf/stubs/stringprintf.cc',
        'src/google/protobuf/stubs/structurally_valid.cc',
        'src/google/protobuf/stubs/status.cc',
        'src/google/protobuf/any.cc',
        'src/google/protobuf/arena.cc',
        'src/google/protobuf/arenastring.cc',
        'src/google/protobuf/descriptor.cc',
        'src/google/protobuf/descriptor.pb.cc',
        'src/google/protobuf/descriptor_database.cc',
        'src/google/protobuf/dynamic_message.cc',
        'src/google/protobuf/extension_set.cc',
        'src/google/protobuf/extension_set_heavy.cc',
        'src/google/protobuf/generated_message_reflection.cc',
        'src/google/protobuf/message.cc',
        'src/google/protobuf/map_field.cc',
        'src/google/protobuf/reflection_ops.cc',
        'src/google/protobuf/service.cc',
        'src/google/protobuf/text_format.cc',
        'src/google/protobuf/wire_format.cc',
        # This file pulls in zlib, but it's not actually used by protoc, so
        # instead of compiling zlib for the host, let's just exclude this.
        # 'src/src/google/protobuf/io/gzip_stream.cc',
        'src/google/protobuf/io/printer.cc',
        'src/google/protobuf/io/strtod.cc',
        'src/google/protobuf/io/tokenizer.cc',
        'src/google/protobuf/io/zero_copy_stream_impl.cc',
        'src/google/protobuf/compiler/importer.cc',
        'src/google/protobuf/compiler/parser.cc',
    ],
    hdrs = [
        'src/google/protobuf/descriptor.h',
        'src/google/protobuf/descriptor.pb.h',
        'src/google/protobuf/descriptor_database.h',
        'src/google/protobuf/dynamic_message.h',
        'src/google/protobuf/generated_enum_reflection.h',
        'src/google/protobuf/generated_message_reflection.h',
        'src/google/protobuf/message.h',
        'src/google/protobuf/reflection_ops.h',
        'src/google/protobuf/service.h',
        'src/google/protobuf/text_format.h',
        'src/google/protobuf/wire_format.h',
        'src/google/protobuf/io/gzip_stream.h',
        'src/google/protobuf/io/printer.h',
        'src/google/protobuf/io/tokenizer.h',
        'src/google/protobuf/io/zero_copy_stream_impl.h',
        'src/google/protobuf/compiler/code_generator.h',
        'src/google/protobuf/compiler/command_line_interface.h',
        'src/google/protobuf/compiler/importer.h',
        'src/google/protobuf/compiler/java/java_doc_comment.h',
        'src/google/protobuf/compiler/java/java_extension_lite.h',
        'src/google/protobuf/compiler/parser.h',
        'src/google/protobuf/stubs/int128.h',
        'src/google/protobuf/stubs/strutil.h',
        'src/google/protobuf/stubs/substitute.h',
        'src/google/protobuf/stubs/stl_util.h',
        'src/google/protobuf/stubs/status.h',
        'src/google/protobuf/stubs/stringpiece.h',
        'src/google/protobuf/stubs/stringprintf.h',
        'src/google/protobuf/stubs/template_util.h',
        'src/google/protobuf/stubs/type_traits.h',
        'src/google/protobuf/io/strtod.h',
        'src/google/protobuf/reflection_internal.h',
        'src/google/protobuf/any.h',
        'src/google/protobuf/map_field_inl.h',
        'src/google/protobuf/map_field.h',
        'src/google/protobuf/stubs/mathlimits.h',
        'src/google/protobuf/map.h',
        'src/google/protobuf/compiler/java/java_extension.h',
        'src/google/protobuf/map_entry.h',
        'src/google/protobuf/map_entry_lite.h',
        'src/google/protobuf/map_type_handler.h',
        'src/google/protobuf/compiler/java/java_context.h',
        'src/google/protobuf/map_field_lite.h',
        'src/google/protobuf/compiler/java/java_options.h',
        'src/google/protobuf/compiler/java/java_helpers.h',
        'src/google/protobuf/compiler/java/java_name_resolver.h',
        'src/google/protobuf/reflection.h',
        'src/google/protobuf/stubs/singleton.h',
        'src/google/protobuf/extension_set.h',
    ],
    deps = ["@protobuf//:protobuf_lite",],
    includes = ["src/"],
    visibility = ["//visibility:public"],
)

cc_library(
    name = "protobuf_message_differencer",
    srcs = [
        'src/google/protobuf/util/field_comparator.cc',
        'src/google/protobuf/util/message_differencer.cc',
    ],
    hdrs = [
        'src/google/protobuf/util/message_differencer.h',
        'src/google/protobuf/util/field_comparator.h',
        'src/google/protobuf/stubs/mathutil.h',
    ],
    deps = ["@protobuf//:protobuf_full_do_not_use",],
    includes = ["src/"],
    visibility = ["//visibility:public"],
)

"""