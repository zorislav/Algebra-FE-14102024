var password = '12345';
var isDuplicate = false;

for (let i = 0; i < password.length; i++) 
{
    for (let j = 0; j < password.length; j++) 
    {
        if (i !== j && password[i] === password[j]) 
        {
            isDuplicate = true;
            break;
        }
    }
    if (isDuplicate) 
    {
        break;
    }
}

if (isDuplicate) 
{
    console.log('Duplikat postoji');
} 
else 
{
    console.log('Duplikat ne postoji');
} 