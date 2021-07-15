import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  max-width: ${(props) => props.maxWidth};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
  font-weight: ${(props) => props.fontWeight};
  border: ${(props) => props.border};
  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.marginTop};
  padding: ${(props) => props.padding};
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  letter-spacing: ${(props) => props.letterSpacing};
  text-transform: ${(props) => props.textTransform};
  @media (max-width: 768px) {
    width: ${(props) => props.Tabwidth};
    height: ${(props) => props.Tabheight};
    max-width: ${(props) => props.TabmaxWidth};
    font-size: ${(props) => props.TabfontSize};
    color: ${(props) => props.Tabcolor};
    text-align: ${(props) => props.TabtextAlign};
    font-weight: ${(props) => props.TabfontWeight};
    border: ${(props) => props.Tabborder};
    margin: ${(props) => props.Tabmargin};
    margin-top: ${(props) => props.TabmarginTop};
    padding: ${(props) => props.Tabpadding};
    display: ${(props) => props.Tabdisplay};
    justify-content: ${(props) => props.TabjustifyContent};
    align-items: ${(props) => props.TabalignItems};
    letter-spacing: ${(props) => props.TabletterSpacing};
    text-transform: ${(props) => props.TabtextTransform};
  }
  @media (max-width: 425px) {
    width: ${(props) => props.Mobwidth};
    height: ${(props) => props.Mobheight};
    max-width: ${(props) => props.MobmaxWidth};
    font-size: ${(props) => props.MobfontSize};
    color: ${(props) => props.Mobcolor};
    text-align: ${(props) => props.MobtextAlign};
    font-weight: ${(props) => props.MobfontWeight};
    border: ${(props) => props.Mobborder};
    margin: ${(props) => props.Mobmargin};
    margin-top: ${(props) => props.MobmarginTop};
    padding: ${(props) => props.Mobpadding};
    display: ${(props) => props.Mobdisplay};
    justify-content: ${(props) => props.MobjustifyContent};
    align-items: ${(props) => props.MobalignItems};
    letter-spacing: ${(props) => props.MobletterSpacing};
    text-transform: ${(props) => props.MobtextTransform};
  }
  @media (max-width: 320px) {
    width: ${(props) => props.Xswidth};
    height: ${(props) => props.Xsheight};
    max-width: ${(props) => props.XsmaxWidth};
    font-size: ${(props) => props.XsfontSize};
    color: ${(props) => props.Xscolor};
    text-align: ${(props) => props.XstextAlign};
    font-weight: ${(props) => props.XsfontWeight};
    border: ${(props) => props.Xsborder};
    margin: ${(props) => props.Xsmargin};
    margin-top: ${(props) => props.XsmarginTop};
    padding: ${(props) => props.Xspadding};
    display: ${(props) => props.Xsdisplay};
    justify-content: ${(props) => props.XsjustifyContent};
    align-items: ${(props) => props.XsalignItems};
    letter-spacing: ${(props) => props.XsletterSpacing};
    text-transform: ${(props) => props.XstextTransform};
  } ;
`;

const Text = ({
  type,
  fontWeight = "300",
  margin = "0",
  children,
  ...props
}) => {
  return (
    <StyledHeader as={type} fontWeight={fontWeight} margin={margin} {...props}>
      {children}
    </StyledHeader>
  );
};

export default Text;
