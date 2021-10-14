import React from 'react';
import parse from 'html-react-parser';

type ComponentProps = {
  value: string;
};

const HtmlPreview = ({ value }: ComponentProps) => {
  const JsxOutput = parse(value);
  return <>{JsxOutput}</>;
};

export default HtmlPreview;
