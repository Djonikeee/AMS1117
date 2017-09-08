var Vref = 1.25;
var Iadj = 0.00005;


function VCalculate()
{
    if (parseInt(document.Vout.Res2.value) / parseInt(document.Vout.Res1.value) > 10.2)
        {
            alert("Vout > 14 Вольт! Примените резистор R2 меньшего номинала.");
            document.Vout.VoutResult.value='';
            return false;
        }
    if (parseInt(document.Vout.Res1.value) < 75 || parseInt(document.Vout.Res1.value) > 270)
        {
            alert("Резистор R1 должен иметь сопротивление от 75 до 270 Ом");
            document.Vout.VoutResult.value='';
            return false;
        } 
        if (parseInt(document.Vout.Res2.value) <= 0)
            {
                alert("Резистор R2 должен иметь сопротивление больше 0 Ом");
                document.Vout.VoutResult.value='';
                return false;
            }    
    document.Vout.VoutResult.value = Vref*(1+(parseInt(document.Vout.Res2.value)/parseInt(document.Vout.Res1.value)))+(Iadj*parseInt(document.Vout.Res2.value));
    return true;
}