document.getElementById('form-pinjaman').addEventListener('submit',kalkulatorPinjaman);
function kalkulatorPinjaman(e) 
{

	const amount		= document.getElementById('amount');
	const interest		= document.getElementById('interest');
	const years			= document.getElementById('years');
	const pembayaran	= document.getElementById('pembayaran');
	const totalPayment	= document.getElementById('total_payment');
	const totalInterest	= document.getElementById('total_interest');

	const pinjaman 		= parseFloat(amount.value);
	const hitungBunga	= parseFloat(interest.value) /100 /12;
	const hitungJumlah	= parseFloat(years.value) * 12;

	const x				= Math.pow(1 + hitungBunga, hitungJumlah);// (1+%)^n

	const bayarBulanan	= (pinjaman * x *hitungBunga)/(x-1);//(Pinjaman X Bunga)/(years-1)

	if (isFinite(bayarBulanan)) 
		{
		 pembayaran.value		= bayarBulanan.toFixed(2);// 2 digits di belakang koma
		 totalPayment.value		= (bayarBulanan * hitungJumlah).toFixed(2);
		 totalInterest.value	= ((bayarBulanan * hitungJumlah)-pinjaman).toFixed(2);	
		}
		else 
		{
		  showError ('Harap isi data dengan benar!');
		}
	e.preventDefault();
}
