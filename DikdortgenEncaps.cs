Class ta yer alan kodlar:
class dortgen
    {
        private int boy;
        public int Boy
        {
            get { return boy; }
            set
            {
                if (value < 0)
                { boy = 0; }
                else
                { boy = value; }
            }
        }
        private int en;
       
 
        public int En
        {
            get { return en; }
            set 
            {
                if (value < 0)
                { en = 0; }
                else
                { en = value; }
              
            }
        }
 
        public int alan()
        {
            int sonuc=0;
            sonuc = en * boy;
            return sonuc;
        }
    }
 
Program kısmında yer alan kodlar: 
  class Program
    {
        static void Main(string[] args)
        {
            dortgen d = new dortgen();
            d.Boy =Convert.ToInt32(Console.ReadLine());
            d.En = Convert.ToInt32(Console.ReadLine());
 
            Console.WriteLine("Boy:" + d.Boy + "En:" + d.En);
            Console.WriteLine(d.alan());
            Console.ReadKey();
        }
    }
 
