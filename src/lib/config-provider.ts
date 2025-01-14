export type Config = {
    [key: string]: {
      name: string;
      title?: string;
      description?: string;
      [key: string] : any;
    } | any
  };
  
  export type Text = {
    title: string,
    text: string
  }

export type SectionType = {
  image?: string,
  title: string,
  text: string,
  links: Link[]
}

export type Link = {
  title: string,
  url: string,
  icon?: string,
  type?: string,
  color?: string,
  target?: string,
  children?: Link[],
  className?: string
  alt?: string
}
  
export const development: boolean =  !process.env.NODE_ENV || process.env.NODE_ENV === 'development';