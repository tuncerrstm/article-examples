public class Kapsulleme {
    // Private ile elemanlarımı tanımladım.
    private String arac_marka;
    private String model;
    private int arac_yas;
    // Get ve Set metodları ile erişimleri sağladık.
    public String getarac_marka() {
    return arac_marka;// Get metodumuzda return kavramı kullanılır.
    } 
    
    public void setarac_marka(String arac_marka) {
        this.arac_marka = arac_marka;// Sınıf elemanıyla karışmaması için this kullandık
    }
    
    public String getmodel() {
        return model;
    }
    
    public void setmodel(String model) {
        this.model=model;
    }
    
    public int getarac_yas() {
        return arac_yas;
    }
    
    public void setarac_yas (int arac_yas) {
        this.arac_yas = arac_yas;
    }
}
 
 
public class main {
      public static void main(String[] args) {
          Kapsulleme k1 = new Kapsulleme(); // Nesnemizi oluşturduk.
          
          k1.setarac_marka("fiat"); // Bilgilerimizi doldurduk.
          k1.setmodel("egea");
          k1.setarac_yas(2);
          
          System.out.println("Araç markası = " + k1.getarac_marka());
          System.out.println("Araç modeli = " + k1.getmodel());
          System.out.println("Araç yaşı = " + k1.getarac_yas());
          
      }
}
