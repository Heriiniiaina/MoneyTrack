import React, { useState } from 'react';
import {
    LayoutAnimation,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    UIManager,
    View
} from 'react-native';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}


type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "Comment créer un compte ?",
    answer: "Allez sur l'écran d'inscription, entrez votre email et choisissez un mot de passe."
  },
  {
    question: "J'ai oublié mon mot de passe",
    answer: "Utilisez le lien 'Mot de passe oublié' sur l'écran de connexion pour réinitialiser votre mot de passe."
  },
  {
    question: "Comment supprimer mon compte ?",
    answer: "Contactez notre support par email à support@monapp.com pour demander la suppression."
  }
];

const HelpScreen: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Aide & Support</Text>

      {faqData.map((item, index) => (
        <View key={index} style={styles.faqItem}>
          <TouchableOpacity onPress={() => toggleItem(index)} style={styles.questionButton}>
            <Text style={styles.questionText}>
              {activeIndex === index ? '▼' : '▶'} {item.question}
            </Text>
          </TouchableOpacity>

          {activeIndex === index && (
            <View style={styles.answerBox}>
              <Text style={styles.answerText}>{item.answer}</Text>
            </View>
          )}
        </View>
      ))}

      <Text style={styles.footer}>Besoin d'aide ? Contactez-nous à support@monapp.com</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff', flex: 1 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  faqItem: { marginBottom: 15 },
  questionButton: {
    padding: 15,
    backgroundColor: '#f1f1f1',
    borderRadius: 8
  },
  questionText: {
    fontSize: 16,
    fontWeight: '600'
  },
  answerBox: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 6,
    marginTop: 8
  },
  answerText: {
    fontSize: 15,
    color: '#333'
  },
  footer: {
    marginTop: 30,
    fontSize: 14,
    color: '#888',
    textAlign: 'center'
  }
});

export default HelpScreen;
