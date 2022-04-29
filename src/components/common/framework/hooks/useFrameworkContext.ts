import { InjectionKey, Ref, UnwrapRef } from 'vue';
import { createContext, useContext } from '/@/hooks/core/useContext';


export interface FrameworkProviderContextProps {
  layout: Ref<'vertical' | 'horizontal'|'mix'>;
  theme?: Ref<'dark' | 'light' | 'primary'>;
  fixed?:Ref<boolean>;
  collapsed?: Ref<boolean>;
  fixedHeader?: Ref<boolean>;
  headerTheme?: Ref<'dark' | 'light' | 'primary'>;
  contentWidth?: Ref<'fluid' | 'fixed'>;

  prefix:Ref<string>,


  // handle 
  handleToggleCollapsed?:(collapsed:boolean)=>void
}

const key:InjectionKey<FrameworkProviderContextProps> = Symbol('framework-content')

export const createFrameworkProviderContext = (context:FrameworkProviderContextProps)=>{
  return createContext<FrameworkProviderContextProps>(context,key)
}

export const useFrameworkContext = ()=>{
  return useContext<UnwrapRef<FrameworkProviderContextProps>>(key)
}
