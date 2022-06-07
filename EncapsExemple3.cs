Öncelikle sınıfımızı aşağıdaki şekilde oluşturuyoruz.
class Makina
    {
        int isi;
 
        public int Isi
        {
            get { return isi; }
            set 
            {
                if (value < = 100 && value>=0)
                { 
                    isi = value; 
                }
                else if (value < 0)
                {
                    isi = 0;
                    throw new Exception("Fazla soğuk");
                }
                else
                {
                   // Console.WriteLine("Aşırı ısınma engellendi"); // Bu şeklide sınıfımızı Windows formda 
                    //çalıştırmak istediğimizde çalışmaz.Bunun yerine
                    //aşağıdaki şekilde Hata fırlatabiliriz.
 
                     isi = 100;
                    throw new Exception("Aşırı derecede ısınma var");
                }
            }
        }
    }

Ana programımıza geçelim. Burada Kodlarımızı try-catch blokları arasına yazarak Hata Yakalama işlemini de gerçekleştireceğiz.

 class Program
    {
        static void Main(string[] args)
        {
            Makina m = new Makina();
            try
            {
            m.Isi =Convert.ToInt32(Console.ReadLine());
          
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            finally
            {
                Console.WriteLine(m.Isi);
                Console.ReadKey();
            }
        }
    }