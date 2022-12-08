import clsx from "clsx"

interface ISection {
  backgroundColor?: string,
  sectionExtraStyle?:string
  children?:any
}

export const Section = ({backgroundColor,sectionExtraStyle,children}:ISection)=>{
  return(
    <div className={clsx(backgroundColor, sectionExtraStyle)} >
      <div className="max-w-section m-auto">
        {children}
      </div>
    </div>
  )
}