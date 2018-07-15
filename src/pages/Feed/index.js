import React from 'react';
import { View, Text } from 'react-native';
import Layout from 'app/components/Layout/Basic';
import { injectIntl } from 'react-intl';
import Photos from 'app/components/Photos';

type Props = {
  intl: any,
};

const Feed = (props: Props) => (
  <Layout>
    <Text>{props.intl.formatMessage({ id: 'Nav.home' })}</Text>
    <Photos />
    <View style={{ flex: 1 }} />
  </Layout>
);

export default injectIntl(Feed);
export { Feed };
