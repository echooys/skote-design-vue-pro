import { skotePrefix } from '../constant';


export const useDesign = (scope?: string) => {
  return {
    prefixVar: skotePrefix,
    prefix: `${skotePrefix}-${scope}`,
  };
};
