(function() {var implementors = {
"async_graphql":[],
"linera_chain":[["impl <a class=\"trait\" href=\"async_graphql/base/trait.ObjectType.html\" title=\"trait async_graphql::base::ObjectType\">ObjectType</a> for <a class=\"struct\" href=\"linera_chain/data_types/struct.OutgoingMessage.html\" title=\"struct linera_chain::data_types::OutgoingMessage\">OutgoingMessage</a>"],["impl <a class=\"trait\" href=\"async_graphql/base/trait.ObjectType.html\" title=\"trait async_graphql::base::ObjectType\">ObjectType</a> for <a class=\"struct\" href=\"linera_chain/data_types/struct.Block.html\" title=\"struct linera_chain::data_types::Block\">Block</a>"],["impl <a class=\"trait\" href=\"async_graphql/base/trait.ObjectType.html\" title=\"trait async_graphql::base::ObjectType\">ObjectType</a> for <a class=\"enum\" href=\"linera_chain/data_types/enum.CertificateValue.html\" title=\"enum linera_chain::data_types::CertificateValue\">CertificateValue</a>"],["impl <a class=\"trait\" href=\"async_graphql/base/trait.ObjectType.html\" title=\"trait async_graphql::base::ObjectType\">ObjectType</a> for <a class=\"struct\" href=\"linera_chain/data_types/struct.HashedValue.html\" title=\"struct linera_chain::data_types::HashedValue\">HashedValue</a>"],["impl <a class=\"trait\" href=\"async_graphql/base/trait.ObjectType.html\" title=\"trait async_graphql::base::ObjectType\">ObjectType</a> for <a class=\"struct\" href=\"linera_chain/data_types/struct.IncomingMessage.html\" title=\"struct linera_chain::data_types::IncomingMessage\">IncomingMessage</a>"],["impl <a class=\"trait\" href=\"async_graphql/base/trait.ObjectType.html\" title=\"trait async_graphql::base::ObjectType\">ObjectType</a> for <a class=\"struct\" href=\"linera_chain/data_types/struct.ExecutedBlock.html\" title=\"struct linera_chain::data_types::ExecutedBlock\">ExecutedBlock</a>"],["impl <a class=\"trait\" href=\"async_graphql/base/trait.ObjectType.html\" title=\"trait async_graphql::base::ObjectType\">ObjectType</a> for <a class=\"struct\" href=\"linera_chain/data_types/struct.ChainAndHeight.html\" title=\"struct linera_chain::data_types::ChainAndHeight\">ChainAndHeight</a>"],["impl&lt;C&gt; <a class=\"trait\" href=\"async_graphql/base/trait.ObjectType.html\" title=\"trait async_graphql::base::ObjectType\">ObjectType</a> for <a class=\"struct\" href=\"linera_chain/struct.ChainStateView.html\" title=\"struct linera_chain::ChainStateView\">ChainStateView</a>&lt;C&gt;<span class=\"where fmt-newline\">where\n    C: <a class=\"trait\" href=\"linera_views/common/trait.Context.html\" title=\"trait linera_views::common::Context\">Context</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + 'static,\n    <a class=\"enum\" href=\"linera_views/views/enum.ViewError.html\" title=\"enum linera_views::views::ViewError\">ViewError</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;C::<a class=\"associatedtype\" href=\"linera_views/common/trait.Context.html#associatedtype.Error\" title=\"type linera_views::common::Context::Error\">Error</a>&gt;,</span>"]],
"linera_execution":[["impl&lt;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"linera_views/common/trait.Context.html\" title=\"trait linera_views::common::Context\">Context</a>&gt; <a class=\"trait\" href=\"async_graphql/base/trait.ObjectType.html\" title=\"trait async_graphql::base::ObjectType\">ObjectType</a> for <a class=\"struct\" href=\"linera_execution/struct.ExecutionStateView.html\" title=\"struct linera_execution::ExecutionStateView\">ExecutionStateView</a>&lt;C&gt;<span class=\"where fmt-newline\">where\n    <a class=\"enum\" href=\"linera_views/views/enum.ViewError.html\" title=\"enum linera_views::views::ViewError\">ViewError</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;C::<a class=\"associatedtype\" href=\"linera_views/common/trait.Context.html#associatedtype.Error\" title=\"type linera_views::common::Context::Error\">Error</a>&gt;,</span>"],["impl&lt;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"linera_views/common/trait.Context.html\" title=\"trait linera_views::common::Context\">Context</a>&gt; <a class=\"trait\" href=\"async_graphql/base/trait.ObjectType.html\" title=\"trait async_graphql::base::ObjectType\">ObjectType</a> for <a class=\"struct\" href=\"linera_execution/system/struct.SystemExecutionStateView.html\" title=\"struct linera_execution::system::SystemExecutionStateView\">SystemExecutionStateView</a>&lt;C&gt;<span class=\"where fmt-newline\">where\n    <a class=\"enum\" href=\"linera_views/views/enum.ViewError.html\" title=\"enum linera_views::views::ViewError\">ViewError</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;C::<a class=\"associatedtype\" href=\"linera_views/common/trait.Context.html#associatedtype.Error\" title=\"type linera_views::common::Context::Error\">Error</a>&gt;,</span>"],["impl <a class=\"trait\" href=\"async_graphql/base/trait.ObjectType.html\" title=\"trait async_graphql::base::ObjectType\">ObjectType</a> for <a class=\"struct\" href=\"linera_execution/struct.ChannelSubscription.html\" title=\"struct linera_execution::ChannelSubscription\">ChannelSubscription</a>"],["impl <a class=\"trait\" href=\"async_graphql/base/trait.ObjectType.html\" title=\"trait async_graphql::base::ObjectType\">ObjectType</a> for <a class=\"struct\" href=\"linera_execution/committee/struct.Committee.html\" title=\"struct linera_execution::committee::Committee\">Committee</a>"]],
"linera_service":[["impl <a class=\"trait\" href=\"async_graphql/base/trait.ObjectType.html\" title=\"trait async_graphql::base::ObjectType\">ObjectType</a> for <a class=\"struct\" href=\"linera_service/node_service/struct.Chains.html\" title=\"struct linera_service::node_service::Chains\">Chains</a>"],["impl <a class=\"trait\" href=\"async_graphql/base/trait.ObjectType.html\" title=\"trait async_graphql::base::ObjectType\">ObjectType</a> for <a class=\"struct\" href=\"linera_service/node_service/struct.ApplicationOverview.html\" title=\"struct linera_service::node_service::ApplicationOverview\">ApplicationOverview</a>"],["impl&lt;P, S&gt; <a class=\"trait\" href=\"async_graphql/base/trait.ObjectType.html\" title=\"trait async_graphql::base::ObjectType\">ObjectType</a> for <a class=\"struct\" href=\"linera_service/node_service/struct.MutationRoot.html\" title=\"struct linera_service::node_service::MutationRoot\">MutationRoot</a>&lt;P, S&gt;<span class=\"where fmt-newline\">where\n    P: <a class=\"trait\" href=\"linera_core/client/trait.ValidatorNodeProvider.html\" title=\"trait linera_core::client::ValidatorNodeProvider\">ValidatorNodeProvider</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,\n    S: <a class=\"trait\" href=\"linera_storage/trait.Store.html\" title=\"trait linera_storage::Store\">Store</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,\n    <a class=\"enum\" href=\"linera_views/views/enum.ViewError.html\" title=\"enum linera_views::views::ViewError\">ViewError</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;S::<a class=\"associatedtype\" href=\"linera_storage/trait.Store.html#associatedtype.ContextError\" title=\"type linera_storage::Store::ContextError\">ContextError</a>&gt;,</span>"],["impl&lt;P, S&gt; <a class=\"trait\" href=\"async_graphql/base/trait.ObjectType.html\" title=\"trait async_graphql::base::ObjectType\">ObjectType</a> for <a class=\"struct\" href=\"linera_service/node_service/struct.QueryRoot.html\" title=\"struct linera_service::node_service::QueryRoot\">QueryRoot</a>&lt;P, S&gt;<span class=\"where fmt-newline\">where\n    P: <a class=\"trait\" href=\"linera_core/client/trait.ValidatorNodeProvider.html\" title=\"trait linera_core::client::ValidatorNodeProvider\">ValidatorNodeProvider</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,\n    S: <a class=\"trait\" href=\"linera_storage/trait.Store.html\" title=\"trait linera_storage::Store\">Store</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,\n    <a class=\"enum\" href=\"linera_views/views/enum.ViewError.html\" title=\"enum linera_views::views::ViewError\">ViewError</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;S::<a class=\"associatedtype\" href=\"linera_storage/trait.Store.html#associatedtype.ContextError\" title=\"type linera_storage::Store::ContextError\">ContextError</a>&gt;,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()