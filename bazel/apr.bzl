apr_build_rule = """

genrule(
  name = "copy_apr_h",
  srcs = [
      '@mod_pagespeed//third_party/apr:apr_gen_h_linux_x64',
    ],
  outs = ["apr.h"],
  cmd = "cp $< $@",
)

genrule(
  name = "copy_apr_private_h",
  srcs = [
      '@mod_pagespeed//third_party/apr:apr_gen_private_h_linux_x64',
    ],
  outs = ["apr_private.h"],
  cmd = "cp $< $@",
)

cc_library(
    name = "apr",
    srcs = [
        'atomic/unix/builtins.c',
        'atomic/unix/ia32.c',
        'atomic/unix/mutex.c',
        'dso/unix/dso.c',
        'file_io/unix/buffer.c',
        'file_io/unix/copy.c',
        'file_io/unix/dir.c',
        'file_io/unix/fileacc.c',
        'file_io/unix/filedup.c',
        'file_io/unix/filepath.c',
        'file_io/unix/filepath_util.c',
        'file_io/unix/filestat.c',
        'file_io/unix/flock.c',
        'file_io/unix/fullrw.c',
        'file_io/unix/mktemp.c',
        'file_io/unix/open.c',
        'file_io/unix/pipe.c',
        'file_io/unix/readwrite.c',
        'file_io/unix/seek.c',
        'file_io/unix/tempdir.c',
        'locks/unix/global_mutex.c',
        'locks/unix/proc_mutex.c',
        'locks/unix/thread_cond.c',
        'locks/unix/thread_mutex.c',
        'locks/unix/thread_rwlock.c',
        'memory/unix/apr_pools.c',
        'misc/unix/charset.c',
        'misc/unix/env.c',
        'misc/unix/errorcodes.c',
        'misc/unix/getopt.c',
        'misc/unix/otherchild.c',
        'misc/unix/rand.c',
        'misc/unix/start.c',
        'misc/unix/version.c',
        'mmap/unix/common.c',
        'mmap/unix/mmap.c',
        'network_io/unix/inet_ntop.c',
        'network_io/unix/inet_pton.c',
        'network_io/unix/multicast.c',
        'network_io/unix/sendrecv.c',
        'network_io/unix/sockaddr.c',
        'network_io/unix/socket_util.c',
        'network_io/unix/sockets.c',
        'network_io/unix/sockopt.c',
        'passwd/apr_getpass.c',
        'poll/unix/epoll.c',
        'poll/unix/kqueue.c',
        'poll/unix/poll.c',
        'poll/unix/pollcb.c',
        'poll/unix/pollset.c',
        'poll/unix/port.c',
        'poll/unix/select.c',
        'poll/unix/wakeup.c',
        'random/unix/apr_random.c',
        'random/unix/sha2.c',
        #'random/unix/sha2_glue.c',
        'shmem/unix/shm.c',
        'strings/apr_cpystrn.c',
        'strings/apr_fnmatch.c',
        'strings/apr_snprintf.c',
        'strings/apr_strings.c',
        'strings/apr_strnatcmp.c',
        'strings/apr_strtok.c',
        'support/unix/waitio.c',
        'tables/apr_hash.c',
        'tables/apr_tables.c',
        'threadproc/unix/proc.c',
        'threadproc/unix/procsup.c',
        'threadproc/unix/signals.c',
        'threadproc/unix/thread.c',
        'threadproc/unix/threadpriv.c',
        'time/unix/time.c',
        'time/unix/timestr.c',
        'user/unix/groupinfo.c',
        'user/unix/userinfo.c',
    ],
    hdrs = [
        ":copy_apr_private_h",
        ":copy_apr_h",
        "random/unix/sha2.h",
        "include/apr_ring.h",
        "include/apr_hash.h",
        "include/apr_inherit.h",
        "include/apr_network_io.h",
        "include/apr_atomic.h",
        "include/apr_fnmatch.h",
        "include/apr_escape.h",
        "include/apr_allocator.h",
        "include/apr_thread_mutex.h",
        "include/apr_errno.h",
        "include/apr_portable.h",
        "include/apr_mmap.h",
        "include/apr_skiplist.h",
        "include/apr_shm.h",
        "include/apr_tables.h",
        "include/apr_support.h",
        "include/apr_file_info.h",
        "include/apr_thread_cond.h",
        "include/apr_proc_mutex.h",
        "include/apr_signal.h",
        "include/apr_general.h",
        "include/apr_version.h",
        "include/apr_thread_proc.h",
        "include/apr_perms_set.h",
        "include/apr_cstr.h",
        "include/apr_file_io.h",
        "include/apr_poll.h",
        "include/apr_want.h",
        "include/apr_user.h",
        "include/apr_env.h",
        "include/apr_time.h",
        "include/apr_pools.h",
        "include/arch/unix/apr_arch_thread_rwlock.h",
        "include/arch/unix/apr_arch_internal_time.h",
        "include/arch/unix/apr_arch_poll_private.h",
        "include/arch/unix/apr_arch_proc_mutex.h",
        "include/arch/unix/apr_arch_networkio.h",
        "include/arch/unix/apr_arch_shm.h",
        "include/arch/unix/apr_arch_thread_cond.h",
        "include/arch/unix/apr_arch_threadproc.h",
        "include/arch/unix/apr_arch_global_mutex.h",
        "include/arch/unix/apr_arch_thread_mutex.h",
        "include/arch/unix/apr_arch_atomic.h",
        "include/arch/unix/apr_arch_inherit.h",
        "include/arch/unix/apr_arch_file_io.h",
        "include/arch/unix/apr_arch_misc.h",
        "include/arch/unix/apr_arch_dso.h",
        "include/arch/apr_private_common.h",
        "include/apr_dso.h",
        "include/apr_global_mutex.h",
        "include/apr_getopt.h",
        "include/apr_lib.h",
        "include/apr_thread_rwlock.h",
        "include/apr_strings.h",
        "include/apr_random.h",
    ],
    copts = [
        "-Iexternal/apr/include/",
        "-Iexternal/apr/include/arch/unix/",
        "-Iexternal/apr/",
        "-Wnoerror=int-conversion",
    ],
    visibility = ["//visibility:public"],
)
"""
