import Layout from '@mui-treasury/layout';

const scheme = Layout();
scheme.configureHeader(builder => {
  builder
    .registerConfig('xs', {
      position: 'fixed',
    })
});
scheme.configureHeader(builder => {
  builder.create("secondaryBar")
    .registerConfig("xs", {
      position: "sticky"
    })
});

// scheme.configureEdgeSidebar(builder => {
//   builder
//     .create("drawer", { anchor: "left" })
//     .registerPermanentConfig('xs', {
//       width: 256,
//       collapsible: true,
//       collapsedWidth: 62
//     })
// });

export default scheme;
