import { colors } from "@/Constants/Color";
import { url } from "@/Constants/url";
import { getFontSize } from "@/Constants/utils";
import axios from "axios";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Dimensions,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import Loading from "./Loading";
import SelectedComponents, { SelectedType } from "./SelectedComponents";
import { showToast } from "./ShowToast";

type Props = {};
const categoryList: SelectedType[] = [
  {
    name: "health",
    value: "health",
  },
  {
    name: "transport",
    value: "transport",
  },
  {
    name: "shopping",
    value: "shopping",
  },
  {
    name: "bill",
    value: "bill",
  },
  {
    name: "others",
    value: "others",
  },
];
const { width, height } = Dimensions.get("window");
const NewIncome = (props: Props) => {
  const [category, setCategory] = useState("");
  const [note, setNote] = useState<string>("");
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async () => {
    if (amount.length < 1 || category.length < 1 || note.length < 1) {
      showToast("Please provide");
      return;
    }
    setIsLoading(true);
    try {
      const res = await axios.post(`${url}/budget/add`, {
        note,
        category,
        amount,
        userId: "68e7928aa6644f6bc8746bc9",
      });
      showToast(res.data.message);
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.log("Response error:", error.response.data);
        } else if (error.request) {
          console.log("No response received:", error.request);
        } else {
          console.log("Axios error:", error.message);
        }
      } else {
        console.log("Non-Axios error:", error);
      }
    } finally {
      setIsLoading(false);
      router.replace("/(tabs)/budget");
    }
  };
  return (
    <View style={style.container}>
      <View style={{ gap: 5, padding: 10 }}>
        <Text
          style={{
            fontSize: getFontSize(width, "other") - 2,
            color: colors.textColor,
          }}
        >
          Amount
        </Text>
        <TextInput style={style.textInput} />
      </View>
      <View style={{ gap: 10, padding: 10 }}>
        <Text
          style={{
            color: colors.textColor,
            fontSize: getFontSize(width, "other") - 2,
          }}
        >
          Category
        </Text>
        <SelectedComponents
          item={categoryList}
          selected={category}
          setSelected={setCategory}
        />
      </View>
      <View style={style.input}>
        <Text
          style={{
            color: colors.textColor,
            fontSize: getFontSize(width, "other") - 2,
          }}
        >
          Note
        </Text>
        <TextInput
          style={{
            borderColor: colors.grey,
            borderWidth: 1,
            color: colors.textColor,
            height: height * 0.1,
            borderRadius: 10,
          }}
          multiline={true}
          numberOfLines={4}
          onChangeText={(value) => setNote(value)}
        />
      </View>
      <TouchableOpacity style={style.btn} onPress={handleSubmit}>
        {isLoading ? (
          <Loading />
        ) : (
          <Text
            style={{
              color: colors.textColor,
              fontSize: getFontSize(width, "max"),
            }}
          >
            Add Income
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },
  textInput: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.grey,
    padding: 5,
    borderRadius: 10,
    color: colors.primary,
    fontSize: getFontSize(width, "min"),
    height: height * 0.05,
  },
  input: {
    padding: 10,
    gap: 10,
  },
  btn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.1,
    backgroundColor: colors.primary,
    height: height * 0.05,
    margin: 10,
    borderRadius: 10,
  },
});
export default NewIncome
