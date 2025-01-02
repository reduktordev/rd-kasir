import { KeyboardAvoidingView, Platform, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Kategori from "../components/Kategori";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import Navbar from "../components/Navbar";
import DatePicker from "../components/Date";
import IncomeCard from "../components/IncomeCard";
import DaftarTransaksi from "../components/DaftarTransaksi";

export default function Activity (){
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={tw`flex-1`}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={tw`flex-grow bg-white`}
          keyboardShouldPersistTaps="handled"
        >
            <View style={tw`mb-4`}>
                <Navbar />
            </View>
            <View style={tw`mb-4`}>
                <DatePicker />
            </View>
            <View style={tw`mb-4`}>
                <IncomeCard />
            </View>
            <View style={tw`mb-4`}>
                <DaftarTransaksi />
            </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </GestureHandlerRootView>

    )
}