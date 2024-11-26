import { useProfile } from "../hooks/useProfile";

export default function ProfilePage() {
  const profile = useProfile();

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
      <div className="w-full p-8 bg-white rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold text-black mb-8">Profile</h1>

        <div className="space-y-6">
          {/* Profile Image Section */}
          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 rounded-full bg-lightGray flex items-center justify-center">
              <span className="text-4xl text-textDarkGray">👤</span>
            </div>
            <button className="px-4 py-2 text-sm border border-lightGrayBorder rounded-full hover:bg-veryLightGray transition-colors duration-200">
              Change Photo
            </button>
          </div>

          {/* Profile Information */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-textDarkGray">
                Name
              </label>
              <input
                type="text"
                className="w-full p-3 border border-lightGrayBorder rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                placeholder="Your name"
                value={profile.name}
                readOnly
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-textDarkGray">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 border border-lightGrayBorder rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                placeholder="your.email@example.com"
                value={profile.email}
                readOnly
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-textDarkGray">
                Bio
              </label>
              <textarea
                className="w-full p-3 border border-lightGrayBorder rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 resize-none"
                rows={4}
                placeholder="Tell us about yourself..."
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="pt-4">
            <button className="w-full md:w-auto px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
