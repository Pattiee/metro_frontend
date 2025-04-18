import React from 'react'

const Footer = () => {
    return (
        <>
            <section>
                <footer className="bg-gray-100 text-gray-700 py-10 px-6 mt-12">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* About */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-orange-600">About Metro Shop</h3>
                            <p className="text-sm leading-relaxed">
                                Metro Shop is your go-to e-commerce destination. We offer a wide variety of high-quality products with unbeatable deals and reliable delivery.
                            </p>
                        </div>

                        {/* Customer Service */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-orange-600">Customer Service</h3>
                            <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">Contact Us</a></li>
                            <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
                            <li><a href="#" className="hover:underline">FAQs</a></li>
                            <li><a href="#" className="hover:underline">Support</a></li>
                            </ul>
                        </div>

                        {/* Follow Us */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-orange-600">Follow Us</h3>
                            <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">Instagram</a></li>
                            <li><a href="#" className="hover:underline">Facebook</a></li>
                            <li><a href="#" className="hover:underline">Twitter</a></li>
                            <li><a href="#" className="hover:underline">YouTube</a></li>
                            </ul>
                        </div>
                        </div>

                        <div className="text-center text-sm mt-10 text-gray-500">
                        &copy; {new Date().getFullYear()} Metro Shop. All rights reserved.
                    </div>
                    </footer>
                </section>
        </>
  )
}

export default Footer
