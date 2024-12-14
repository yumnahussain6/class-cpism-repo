let std=["Yumna", "Rija", "Afifa", "Hala", "Mansoor", "Yousha", "Asad", "Abdul Basit", "Zohaib", "Haider", "Ali", "Asad", "Abdul Haq"];
for(let i=0; i<std.length; i++)
{
    document.getElementById('list').innerHTML+=`<ul>${std[i]}<ul>`;
}