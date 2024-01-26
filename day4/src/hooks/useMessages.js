import { ref } from "vue";
export const useMessages = () => {
  const messages = ref([
    "Apex Legends",
    "A Plague Tale: Innocence",
    "ART SQOOL",
    "Baba Is You",
    "Devil May Cry 5",
    "The Division 2",
    "Hypnospace Outlaw",
    "Katana ZERO",
  ]);
  const deleteMessage = (value) => {
    messages.value = messages.value.filter((item) => item !== value);
  };
  const addMessage = (value) => {
    messages.value.push(value);
  };
  return { messages, deleteMessage, addMessage };
};
