import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import btProducts from "@/assets/bt-products.jpg";
import eeProducts from "@/assets/ee-products.jpg";
import plusnetProducts from "@/assets/plusnet-products.jpg";

const brands = [
  {
    id: "mybt",
    name: "BT",
    description: "BT's premium broadband and phone services for home and business",
    image: btProducts,
    gradient: "from-primary/20 to-primary/5",
    buttonColor: "bg-primary hover:bg-primary/90",
    textColor: "text-primary-foreground"
  },
  {
    id: "myee",
    name: "EE",
    description: "EE's award-winning mobile network and superfast broadband",
    image: eeProducts,
    gradient: "from-accent/20 to-accent/5", 
    buttonColor: "bg-accent hover:bg-accent/90",
    textColor: "text-accent-foreground"
  },
  {
    id: "plusnet",
    name: "Plusnet",
    description: "Honest, straightforward broadband and phone deals",
    image: plusnetProducts,
    gradient: "from-blue-600/20 to-blue-600/5",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
    textColor: "text-white"
  }
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleBrandClick = (brandId: string) => {
    navigate(`/brand/${brandId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h1 className="text-3xl font-bold text-primary">MYBT App</h1>
              <span className="text-sm text-muted-foreground">Telco E-commerce Portal</span>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline">Login</Button>
              <Button>Register</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-foreground mb-4">
            Welcome to MYBT App
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover the best broadband, mobile, and phone deals from BT's family of brands. 
            Find the perfect plan for your home or business.
          </p>
        </div>
      </section>

      {/* Brand Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Choose Your Brand
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {brands.map((brand) => (
              <Card 
                key={brand.id}
                className="group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border-0 bg-gradient-to-br overflow-hidden"
                style={{
                  backgroundImage: `linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--muted)) 100%)`
                }}
                onClick={() => handleBrandClick(brand.id)}
              >
                <div className="relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${brand.gradient} opacity-80`} />
                  <img 
                    src={brand.image} 
                    alt={`${brand.name} products`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="text-center pb-4 relative">
                  <CardTitle className="text-3xl font-bold text-foreground mb-2">{brand.name}</CardTitle>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {brand.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 pb-6">
                  <Button 
                    className={`w-full ${brand.buttonColor} ${brand.textColor} shadow-lg font-semibold py-3 text-base`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBrandClick(brand.id);
                    }}
                  >
                    Explore {brand.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Why Choose MYBT App?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Compare and shop the best deals from all BT family brands in one convenient place
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                📱
              </div>
              <h4 className="text-xl font-semibold mb-2">Mobile & Broadband</h4>
              <p className="text-muted-foreground">Find the perfect mobile and broadband packages for your needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                🛒
              </div>
              <h4 className="text-xl font-semibold mb-2">Easy Shopping</h4>
              <p className="text-muted-foreground">Simple cart and checkout process with secure payments</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                ⭐
              </div>
              <h4 className="text-xl font-semibold mb-2">Best Deals</h4>
              <p className="text-muted-foreground">Compare prices and find exclusive offers across all brands</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 MYBT App. All rights reserved. Part of the BT Group family.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;