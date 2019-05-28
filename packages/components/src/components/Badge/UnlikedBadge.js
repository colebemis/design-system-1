import React from 'react';
import { string } from 'prop-types';
import { withTheme } from 'styled-components';
import { Text } from 'rebass';
import { borderRadius, themeGet } from 'styled-system';

const UnlinkedBadge = ({ color, text, ...props }) => (
  <Text
    {...props}
    css={`
      ${borderRadius}
      display: inline-block;
    `}
    color={themeGet(`colors.modes.${color}.text`)(props)}
    bg={themeGet(`colors.modes.${color}.background`)(props)}
    borderRadius="pill"
    fontFamily="body"
    fontSize={0}
    fontWeight="bold"
    px={2}
    py={1}
  >
    {text}
  </Text>
);

UnlinkedBadge.propTypes = {
  color: string,
  text: string.isRequired,
};

UnlinkedBadge.defaultProps = {
  color: 'primary',
};

export default withTheme(UnlinkedBadge);