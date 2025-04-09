// pages/menu.js
export default function Menu() {
    const menuItems = [
      {
        category: "PIZZAS",
        items: [
          { name: "Margherita", price: "12", description: "Tomato sauce, mozzarella, basil" },
          // Add all items from OCR
        ]
      },
      // Add other categories
    ];
  
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-center mb-12">Our Menu</h1>
        
        {menuItems.map((section) => (
          <div key={section.category} className="mb-16">
            <h2 className="text-2xl font-semibold border-b border-amber-200 pb-2 mb-6">
              {section.category}
            </h2>
            <div className="space-y-6">
              {section.items.map((item) => (
                <div key={item.name} className="flex justify-between gap-4">
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    {item.description && (
                      <p className="text-gray-600 mt-1">{item.description}</p>
                    )}
                  </div>
                  <span className="text-amber-600 font-medium whitespace-nowrap">
                    ${item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }