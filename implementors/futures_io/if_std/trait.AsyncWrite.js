(function() {var implementors = {
"async_io_stream":[["impl&lt;St, I&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"async_io_stream/struct.IoStream.html\" title=\"struct async_io_stream::IoStream\">IoStream</a>&lt;St, I&gt;<span class=\"where fmt-newline\">where\n    St: <a class=\"trait\" href=\"futures_sink/trait.Sink.html\" title=\"trait futures_sink::Sink\">Sink</a>&lt;I, Error = <a class=\"struct\" href=\"https://doc.rust-lang.org/1.71.0/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.71.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.71.0/std/primitive.u8.html\">u8</a>&gt;&gt;,</span>"]],
"futures":[],
"futures_io":[],
"futures_util":[["impl <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"futures_util/io/struct.Sink.html\" title=\"struct futures_util::io::Sink\">Sink</a>"],["impl&lt;A, B&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a> for <a class=\"enum\" href=\"futures_util/future/enum.Either.html\" title=\"enum futures_util::future::Either\">Either</a>&lt;A, B&gt;<span class=\"where fmt-newline\">where\n    A: <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a>,\n    B: <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a>,</span>"],["impl&lt;W: <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"futures_util/io/struct.BufWriter.html\" title=\"struct futures_util::io::BufWriter\">BufWriter</a>&lt;W&gt;"],["impl&lt;St&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"futures_util/stream/struct.IntoAsyncRead.html\" title=\"struct futures_util::stream::IntoAsyncRead\">IntoAsyncRead</a>&lt;St&gt;<span class=\"where fmt-newline\">where\n    St: <a class=\"trait\" href=\"futures_util/stream/trait.TryStream.html\" title=\"trait futures_util::stream::TryStream\">TryStream</a>&lt;Error = <a class=\"struct\" href=\"https://doc.rust-lang.org/1.71.0/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; + <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a>,\n    St::<a class=\"associatedtype\" href=\"futures_util/stream/trait.TryStream.html#associatedtype.Ok\" title=\"type futures_util::stream::TryStream::Ok\">Ok</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.71.0/std/primitive.u8.html\">u8</a>]&gt;,</span>"],["impl&lt;W: <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"futures_util/io/struct.LineWriter.html\" title=\"struct futures_util::io::LineWriter\">LineWriter</a>&lt;W&gt;"],["impl&lt;W: <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"futures_util/io/struct.WriteHalf.html\" title=\"struct futures_util::io::WriteHalf\">WriteHalf</a>&lt;W&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"futures_util/io/struct.AllowStdIo.html\" title=\"struct futures_util::io::AllowStdIo\">AllowStdIo</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,</span>"],["impl&lt;R: <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"futures_util/io/struct.BufReader.html\" title=\"struct futures_util::io::BufReader\">BufReader</a>&lt;R&gt;"],["impl <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"futures_util/io/struct.Cursor.html\" title=\"struct futures_util::io::Cursor\">Cursor</a>&lt;&amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.71.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.71.0/std/primitive.u8.html\">u8</a>&gt;&gt;"],["impl <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"futures_util/io/struct.Cursor.html\" title=\"struct futures_util::io::Cursor\">Cursor</a>&lt;&amp;mut [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.71.0/std/primitive.u8.html\">u8</a>]&gt;"],["impl <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"futures_util/io/struct.Cursor.html\" title=\"struct futures_util::io::Cursor\">Cursor</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.71.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.71.0/std/primitive.u8.html\">u8</a>&gt;&gt;"],["impl <a class=\"trait\" href=\"futures_util/io/trait.AsyncWrite.html\" title=\"trait futures_util::io::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"futures_util/io/struct.Cursor.html\" title=\"struct futures_util::io::Cursor\">Cursor</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.71.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.71.0/std/primitive.u8.html\">u8</a>]&gt;&gt;"]],
"linera_sdk":[],
"tokio_util":[["impl&lt;T&gt; <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> for <a class=\"struct\" href=\"tokio_util/compat/struct.Compat.html\" title=\"struct tokio_util::compat::Compat\">Compat</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"tokio/io/async_write/trait.AsyncWrite.html\" title=\"trait tokio::io::async_write::AsyncWrite\">AsyncWrite</a>,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()