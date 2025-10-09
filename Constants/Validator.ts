export const checkEmail = (email:string):boolean=>{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
export const isValidPassword = (password: string): boolean => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
  };
  