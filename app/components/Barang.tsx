// import React from "react";
// import { View, Text, FlatList, Image } from "react-native";
// import tw from "tailwind-react-native-classnames";

// const Barang = () => {
//   const products = [
//     {
//       id: 1,
//       name: "Product 1",
//       price: 10.99,
//       description: "This is product 1",
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Oreo-Two-Cookies.png/1200px-Oreo-Two-Cookies.png",
//     },
//     {
//       id: 2,
//       name: "Product 2",
//       price: 12.49,
//       description: "This is product 2",
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Oreo-Two-Cookies.png/1200px-Oreo-Two-Cookies.png",
//     },
//     {
//       id: 3,
//       name: "Product 3",
//       price: 8.99,
//       description: "This is product 3",
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Oreo-Two-Cookies.png/1200px-Oreo-Two-Cookies.png",
//     },
//     {
//       id: 4,
//       name: "Product 4",
//       price: 15.49,
//       description: "This is product 4",
//       image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Oreo-Two-Cookies.png/1200px-Oreo-Two-Cookies.png",
//     },
//   ];

//   const renderItem = ({
//     item,
//   }: {
//     item: {
//       name: string;
//       price: number;
//       description: string;
//       image: string;
//     };
//   }) => (
//     <View style={tw`bg-white p-4 m-2 rounded-lg shadow-lg`}>
//       <Image
//         source={{ uri: item.image }}
//         style={tw`w-full h-48 rounded-lg mb-4`}
//         resizeMode="cover"
//       />
//       <Text style={tw`text-lg font-semibold text-gray-800`}>{item.name}</Text>
//       <Text style={tw`text-sm text-gray-600 mt-1`}>{item.description}</Text>
//       <Text style={tw`text-xl font-bold text-gray-800 mt-2`}>${item.price}</Text>
//     </View>
//   );

//   return (
//     <FlatList
//       data={products}
//       renderItem={renderItem}
//       keyExtractor={(item) => item.id.toString()}
//       numColumns={2} // This makes 2 items per row
//       style={tw`p-4`}
//     />
//   );
// };

// export default Barang;
