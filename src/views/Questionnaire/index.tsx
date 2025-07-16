import React, { useState, useContext } from "react";
import { ScrollView, Alert } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Button, Text } from "~components";
import { ThemeContext } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { SceneName } from "~src/@types/SceneName";
import { PERSONALITY_QUESTIONS } from "~src/@types/Questionnaire";
import {
  Container,
  Header,
  Title,
  Subtitle,
  QuestionContainer,
  QuestionText,
  AnswerInput,
  ProgressBar,
  ProgressFill,
  QuestionNumber,
} from "./styles";

const Questionnaire = () => {
  const insets = useSafeAreaInsets();
  const themeContext = useContext(ThemeContext);
  const navigation = useNavigation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>(new Array(PERSONALITY_QUESTIONS.length).fill(""));
  const [loading, setLoading] = useState(false);

  const handleAnswerChange = (text: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = text;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (!answers[currentQuestion].trim()) {
      Alert.alert("Please answer the question", "Your response helps us find better matches for you.");
      return;
    }

    if (currentQuestion < PERSONALITY_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    // Simulate API call to save questionnaire responses
    setTimeout(() => {
      navigation.navigate(SceneName.EditProfile);
      setLoading(false);
    }, 1500);
  };

  const progress = ((currentQuestion + 1) / PERSONALITY_QUESTIONS.length) * 100;

  return (
    <Container style={{ paddingTop: insets.top }}>
      <StatusBar style={themeContext.dark ? "light" : "dark"} />
      <Header>
        <Title>Let's get to know you</Title>
        <Subtitle>Answer these questions to help us find your perfect match</Subtitle>
        <ProgressBar>
          <ProgressFill style={{ width: `${progress}%` }} />
        </ProgressBar>
        <QuestionNumber>
          Question {currentQuestion + 1} of {PERSONALITY_QUESTIONS.length}
        </QuestionNumber>
      </Header>

      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <QuestionContainer>
          <QuestionText>{PERSONALITY_QUESTIONS[currentQuestion]}</QuestionText>
          <AnswerInput
            multiline
            numberOfLines={4}
            placeholder="Share your thoughts..."
            value={answers[currentQuestion]}
            onChangeText={handleAnswerChange}
            textAlignVertical="top"
          />
        </QuestionContainer>
      </ScrollView>

      <Button
        style={{ marginHorizontal: 20, marginBottom: insets.bottom + 20 }}
        onPress={handleNext}
        loading={loading}
      >
        {currentQuestion === PERSONALITY_QUESTIONS.length - 1 ? "Complete Profile" : "Next Question"}
      </Button>

      {currentQuestion > 0 && (
        <Button
          variant="outline"
          style={{ marginHorizontal: 20, marginBottom: insets.bottom + 10 }}
          onPress={handlePrevious}
        >
          Previous
        </Button>
      )}
    </Container>
  );
};

export default Questionnaire;