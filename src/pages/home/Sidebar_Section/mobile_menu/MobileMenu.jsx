function MobileMenu() {
  return (
    <div className="absolute top-0 left-0 h-screen w-56 bg-green-200 px-4  ">
      {/* Upper profile */}
      <div className="px-4 py-2">
        <div className="flex items-center justify-between">
          <img
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqtNV9htkV2DORF2rdUW5rpahAtdHRRPVJcwNIlsv1aHl59tzsyN7J-BxuaXIxSmmNIX7aLu-h7G95jcpOKPVNXBJBte-dg-wjM96aLg`}
            className="w-14 h-14 rounded-full object-cover"
          />
          <p>hello</p>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
