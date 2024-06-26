export const formateDate=(dateString)=>{

   return new Date(dateString).toLocaleDateString("en-US")
}