export default function LoginPage() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-cover bg-center" >
        <div className="bg-white p-8 rounded-2xl shadow-lg w-96" style={{ backgroundImage: "url('/image3.jpg')" }}>
          <h2 className="text-2xl font-bold text-center text-color-1A2737 mb-4">WELCOME BACK!</h2>
          <p className="text-center text-sm text-gray-600 mb-6">
            New here? <a href="#" className="text-blue-500">Sign up here!</a>
          </p>
          <input 
            type="email" 
            placeholder="Digite seu Email" 
            className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="password" 
            placeholder="Digite sua Senha" 
            className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-blue-500 text-sm">Forgot password?</a>
          </div>
          <button className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition">LOGIN</button>
          <div className="text-center my-4 text-gray-500">OR</div>
          <button className="w-full flex items-center justify-center border border-orange-500 text-orange-500 py-2 rounded-lg mb-2 hover:bg-orange-100 transition">
            <img src="/google-icon.svg" alt="Google" className="w-5 h-5 mr-2" /> Continue with Google
          </button>
          <button className="w-full flex items-center justify-center border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition">
            <img src="/facebook-icon.svg" alt="Facebook" className="w-5 h-5 mr-2" /> Continue with Facebook
          </button>
        </div>
      </div>
    );
  }