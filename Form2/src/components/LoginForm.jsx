import React from 'react';
import logoJcsx from '../assets/logoJcsx.png';

export function LoginForm() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: 'var(--background-color)' }}
    >
      <div className="max-w-[360px] overflow-hidden rounded-[20px] bg-white shadow-lg w-72">
        <div
          className="relative h-48 w-72"
          style={{ backgroundColor: 'var(--primary-color)' }}
        >
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, gray 1px, transparent 0)`,
                backgroundSize: '12px 12px',
              }}
            />
          </div>
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2">
            <img src={logoJcsx} alt="Logo" />
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 h-10 bg-white"
            style={{
              borderTopLeftRadius: '100px',
            }}
          />
        </div>
        <div className="px-8 pb-8 pt-4 h-96">
          <h1
            className="mb-6 text-xl font-semibold"
            style={{ color: 'var(--text-color)' }}
          >
            Login
          </h1>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm mb-1"
                style={{ color: 'var(--text-color)' }}
              >
                Email
              </label>
              <div>
                <input
                  id="email"
                  type="email"
                  required
                  className="appearance-none mb-4 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm "
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm mb-1"
                style={{ color: 'var(--text-color)' }}
              >
                Password
              </label>
              <div>
                <input
                  id="password"
                  type="password"
                  required
                  className="appearance-none mb-4 rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500  focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm "
                  style={{
                    color: 'var(--text-color)'
                  }}
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 rounded-lg mt-4 text-sm font-normal"
              style={{
                backgroundColor: 'var(--primary-color)',
                color: 'var(--secondary-color)',
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
